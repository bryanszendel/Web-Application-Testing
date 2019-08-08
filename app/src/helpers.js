
export const strikeCounter = (strikeState) => {
  if (strikeState + 1 >= 3) return 0;
  else return strikeState + 1;
}

export const ballCounter = (ballState) => {
  if (ballState +1 >= 4) return 0;
  else return ballState + 1;
}




