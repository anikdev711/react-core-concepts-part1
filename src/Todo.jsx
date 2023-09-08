
// export default function Todo({task}){
//     return (
//         <li>Tasks: {task}</li>
//     )
// }

//Conditional rendering: Option-1

// export default function Todo({task, isDone}){

//         if(isDone === true){
//            return <li>Tasks finished: {task}</li>
//         }
//         else{
//             return <li>Work on: {task}</li>
//         }
// }

//Conditional rendering: Option-2

// export default function Todo({ task, isDone }) {

// if (isDone === true) {
// return <li>Tasks finished: {task}</li>
// }
// 
// return <li>Work on: {task}</li>
// }

//Conditional rendering: Option-3 
// export default function Todo({task, isDone}){
// return (
// <li>{isDone ? 'finished' : 'work on'} : {task}</li>
// )
// }

//Conditional rendering: Option-4
// export default function Todo({task, isDone}){
// return(
// <li>{task}: {isDone === true && 'done' }</li>
// )
// }

//Conditional rendering: Option-5
// export default function Todo({task, isDone}){
// return (
// <li>{task}: {isDone === true || 'do it'}</li>
// )
// }

//Conditional rendering: Option-6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone === true) {
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem
}




