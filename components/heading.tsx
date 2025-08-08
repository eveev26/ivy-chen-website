export const Heading = ({ title, id }: { title: string; id?: string }) => {
  return (
    <div
      id={id}
      className="flex flex-row w-screen pl-8 lg:pl-48 pr-8 lg:pr-48 place-items-center justify-left container"
    >
      <div className="flex flex-col gap-12">
        <h2 className="flex text-4xl lg:text-6xl text-justify text-dark-brown">
          {title}
        </h2>
      </div>
    </div>
  );
};
