interface Category {
  id: string;
  name: string;
  children?: Category[];
}

interface CategoryTreeProps {
  categories: Category[];
}

function CategoryItem({ category }: { category: Category }) {
  return (
    <li style={{ margin: "8px 0" }}>
      📁 {category.name}

      {category.children && category.children.length > 0 && (
        <ul style={{ marginLeft: "20px" }}>
          {category.children.map((child) => (
            <CategoryItem key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CategoryTree({
  categories,
}: CategoryTreeProps) {
  return (
    <ul>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </ul>
  );
}
