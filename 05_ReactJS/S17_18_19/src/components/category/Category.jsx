import "./Category.css";
function Category({ imageUrl, title }) {
  return (
    <div className="category">
      <img src={imageUrl} height={70} width={70} />
      <h4>{title}</h4>
    </div>
  );
}

export default Category;
