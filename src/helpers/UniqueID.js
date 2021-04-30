let UUID = 0;

export default function UniqueID() {
  const getID = () => {
    UUID += 1;
    return UUID;
  };

  return {
    getID,
  };
}
