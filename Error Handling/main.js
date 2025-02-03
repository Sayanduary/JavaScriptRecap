try {
  const divident = Number(window.prompt("Enter a Divident"));
  const divisor = Number(window.prompt("Enter a Divisor"));
  if (divisor == 0) {
    throw new Error("You Cant Divide by Zero");
  } if (divident != typeof (Number) || divisor != typeof (Number)) {
    throw new Error("Value Must be a number");
  }
  const result = divident / divisor;
  console.log(result)
}
catch (error) {
  console.error(error);
}
