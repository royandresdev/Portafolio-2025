import { useState } from "react";
import { Project } from "services/project.types";

interface ProjectEditPanelProps {
  project: Project;
  onSave: (formData: Partial<Project>) => void;
  onCancel: () => void;
  saving: boolean;
}

export default function ProjectEditPanel({ project, onSave, onCancel, saving }: ProjectEditPanelProps) {
  const [form, setForm] = useState({ ...project });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(form);
  };

  return (
    <div className="bg-primary-400 rounded p-4 flex flex-col gap-4">
      <h2 className="text-primary-100 text-xl font-semibold mb-2">Editar proyecto</h2>
      <label className="text-primary-100">Nombre
        <input
          className="form-input mt-1"
          name="name"
          value={form.name || ""}
          onChange={handleFormChange}
        />
      </label>
      {/* Agrega aquí más campos según la estructura del proyecto */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={handleSave}
          className="bg-secondary-base text-primary-400 px-3 py-1 rounded hover:bg-secondary-200 transition-colors"
          disabled={saving}
        >
          {saving ? "Guardando..." : "Guardar"}
        </button>
        <button
          onClick={onCancel}
          className="bg-error text-primary-100 px-3 py-1 rounded hover:bg-error/80 transition-colors"
          disabled={saving}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
