import { useMemo, useState } from "react";

export default function KanbanBoard() {
  const [columns, setColumns] = useState(() => [
    { id: "todo", title: "A Fazer", cards: [{ id: "c1", title: "Exemplo de tarefa" }] },
    { id: "doing", title: "Em Progresso", cards: [] },
    { id: "done", title: "Concluído", cards: [] },
  ]);
  const [addingCol, setAddingCol] = useState(false);
  const [newColTitle, setNewColTitle] = useState("");

  const colById = useMemo(() => Object.fromEntries(columns.map(c => [c.id, c])), [columns]);

  function addColumn() {
    const title = newColTitle.trim();
    if (!title) return;
    const id = `col_${Date.now()}`;
    setColumns((prev) => [...prev, { id, title, cards: [] }]);
    setNewColTitle("");
    setAddingCol(false);
  }

  function addCard(columnId, title) {
    const t = title.trim();
    if (!t) return;
    const card = { id: `card_${Date.now()}`, title: t };
    setColumns((prev) => prev.map(c => c.id === columnId ? { ...c, cards: [...c.cards, card] } : c));
  }

  function moveCard({ cardId, fromColumnId, toColumnId, beforeCardId = null }) {
    if (!cardId || !fromColumnId || !toColumnId) return;
    if (fromColumnId === toColumnId && beforeCardId === cardId) return;

    setColumns((prev) => {
      const next = prev.map(c => ({ ...c, cards: [...c.cards] }));
      const from = next.find(c => c.id === fromColumnId);
      const to = next.find(c => c.id === toColumnId);
      if (!from || !to) return prev;

      const idx = from.cards.findIndex(card => card.id === cardId);
      if (idx === -1) return prev;
      const [card] = from.cards.splice(idx, 1);

      if (beforeCardId) {
        const insertIdx = to.cards.findIndex(c => c.id === beforeCardId);
        if (insertIdx >= 0) {
          to.cards.splice(insertIdx, 0, card);
        } else {
          to.cards.push(card);
        }
      } else {
        to.cards.push(card);
      }

      return next;
    });
  }

  function onDragStart(e, cardId, fromColumnId) {
    const payload = JSON.stringify({ cardId, fromColumnId });
    e.dataTransfer.setData("text/plain", payload);
    e.dataTransfer.effectAllowed = "move";
  }

  function parseDragData(e) {
    try {
      const text = e.dataTransfer.getData("text/plain");
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  function onDropOnColumn(e, toColumnId) {
    e.preventDefault();
    const data = parseDragData(e);
    if (!data) return;
    moveCard({ ...data, toColumnId });
  }

  function onDropOnCard(e, toColumnId, beforeCardId) {
    e.preventDefault();
    e.stopPropagation();
    const data = parseDragData(e);
    if (!data) return;
    moveCard({ ...data, toColumnId, beforeCardId });
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-700">Quadro Kanban</h2>
        <div className="flex items-center gap-2">
          {addingCol ? (
            <div className="flex items-center gap-2">
              <input
                autoFocus
                value={newColTitle}
                onChange={(e) => setNewColTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addColumn();
                  if (e.key === "Escape") { setAddingCol(false); setNewColTitle(""); }
                }}
                placeholder="Nome da coluna"
                className="px-2 py-1 border rounded text-sm"
              />
              <button onClick={addColumn} className="px-2 py-1 bg-indigo-600 text-white rounded text-sm">Adicionar</button>
              <button onClick={() => { setAddingCol(false); setNewColTitle(""); }} className="px-2 py-1 text-sm">Cancelar</button>
            </div>
          ) : (
            <button onClick={() => setAddingCol(true)} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">+ Coluna</button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((col) => (
          <div
            key={col.id}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => onDropOnColumn(e, col.id)}
            className="bg-white rounded-lg shadow p-4 min-h-[300px] flex flex-col"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{col.title}</h3>
            </div>

            <div className="space-y-3 flex-1">
              {col.cards.map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={(e) => onDragStart(e, card.id, col.id)}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => onDropOnCard(e, col.id, card.id)}
                  className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-800 cursor-move hover:bg-gray-100"
                  title="Arraste para mover"
                >
                  {card.title}
                </div>
              ))}
            </div>

            <AddCardInline onAdd={(title) => addCard(col.id, title)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AddCardInline({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  function submit() {
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="mt-3 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded text-sm w-full text-left"
      >
        + Adicionar cartão
      </button>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      <input
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
          if (e.key === "Escape") { setOpen(false); setTitle(""); }
        }}
        placeholder="Título do cartão"
        className="w-full px-2 py-2 border rounded text-sm"
      />
      <div className="flex items-center gap-2">
        <button onClick={submit} className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">Adicionar</button>
        <button onClick={() => { setOpen(false); setTitle(""); }} className="px-3 py-1 text-sm">Cancelar</button>
      </div>
    </div>
  );
}

