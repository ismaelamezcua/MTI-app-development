function Header(props) {
  const { course } = props;

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

function ContentObjectForm(props) {
  const { topics } = props;

  return (
    <div>
      {topics.map((topic) => (
        <p>
          Topic: {topic.part}, with {topic.exercises} exercises.
        </p>
      ))}
    </div>
  );
}

function Total(props) {
  const { topics } = props;

  function totalExercises() {
    let counter = 0;

    topics.map((topic) => {
      counter += topic.exercises;
    });

    return counter;
  }

  return (
    <p>
      Number of exercises <strong>{totalExercises()}</strong>
    </p>
  );
}

function PassingProps() {
  const course = "Aplicaciones para Internet";
  const topics = [
    { part: "Introduction to React", exercises: 10 },
    { part: "Using props", exercises: 7 },
    { part: "Component state", exercises: 14 },
    { part: "Example", exercises: 10 },
    { part: "Using Hooks", exercises: 20 },
    { part: "Conditional rendering", exercises: 10 },
  ];

  return (
    <div>
      <Header course={course} />
      <ContentObjectForm topics={topics} />
      <Total topics={topics} />
    </div>
  );
}

export default PassingProps;
