import React from "react";
const Clicker = () => {
  const fireLasers = (e) => {
    console.log(e.currentTarget);
    console.log("The lasers have been fired");
    console.log("Zap zaP, Pew Pew");
  };
  return (
    <>
      <button onMouseOver={fireLasers}>Click Me!</button>
      <textarea onScroll={fireLasers} row="2">
        asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf
        asdf
        asdfafwmekfjweaoifjaiwoe;fj;aiwoefji;oawejfiaowjfioawejfioawejfio;awje;ifjwaeiofjawiofjiowaefiojwaeiofjweiofjaoiwejfioawjfiojwiof;awjefi;oj
      </textarea>
    </>
  );
};

export default Clicker;
