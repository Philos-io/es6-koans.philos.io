let iterator = (args) =>{
  let index = 0;
  return {
    next: () => {
      let value = args[index++];
      let done = (index === args.length + 1);

    // object short hand notation
      return {
        value,
        done
      }
    }
  }
};

//export default iterator;
