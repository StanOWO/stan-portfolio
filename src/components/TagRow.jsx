export default function TagRow({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
