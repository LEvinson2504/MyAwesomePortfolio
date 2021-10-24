function WorkingOn({ project, date }) {
  return (
    <h3 className="text-3xl sm:text-4xl px-5 sm:h-20 sm:ml-40 font-light">
      <span className="text-green-500">{date}</span> {project}
    </h3>
  );
}

export default WorkingOn;
