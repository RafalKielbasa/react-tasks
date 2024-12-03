import useFetch from "../hooks/useFetch";

const Contact = () => {
  const { contact } = useFetch({ url: "http://localhost:3001/pages" });

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold pb-2">{contact?.title}</h3>
      <p className="mb-2">{contact?.content}</p>
      <p className="mb-2">
        <span className="font-bold">Numer telefonu:</span> {contact?.phone}
      </p>
      <p>
        <span className="font-bold">E-mail: </span>
        {contact?.email}
      </p>
    </div>
  );
};

export default Contact;
