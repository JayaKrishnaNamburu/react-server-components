import getDetails from "./resources/details";

const Author = async ({ id }) => {
  const response = await getDetails({ "sys.id": id });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {response.data[0].name}
      <img
        style={{ width: "30px", borderRadius: "50%" }}
        src={response.data[0].image.url}
        alt="author-image"
      />
    </div>
  );
};

export default Author;
