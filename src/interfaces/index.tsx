interface IMaterialItem {
  id: number;
  estado: string;
  nombre: string;
  descripcion: string;
  stock_minimo: number;
  categoria_id: number;
  category: ICategoryItem;
  creado_a?: string;
  actualizado_a?: string;
}

interface ICategoryItem {
  id: number;
  estado: string;
  nombre: string;
  creado_a?: string;
  actualizado_a?: string;
}

export type { IMaterialItem, ICategoryItem };
