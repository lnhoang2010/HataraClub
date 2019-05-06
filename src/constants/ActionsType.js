export const actionType = {
  NEXT:"NEXT",

}

export default {
  next:(data)=>({
    type: actionType.NEXT,
    data
  })
}