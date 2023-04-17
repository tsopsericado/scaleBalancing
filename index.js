// const ScaleBalancing = (weights, balances) => { 

//   let w1 = JSON.parse(weights[0]);
//   let w2 = JSON.parse(weights[1]);
    
//   for (let i = 0; i < balances.length; i++) {
//     if (w1 + balances[i] === w2 || w2 + balances[i] === w1) { return '' + balances[i]; }
//     if (weights.length !== 2) {
//             return "The first element of the weight can only contain two items";
//           }
//     for (let j = i + 1; j < balances.length; j++) {
//       if (w1 + balances[i] + balances[j] === w2
//         || w2 + balances[i] + balances[j] === w1
//         || w1 + balances[i] === w2 + balances[j]
//         || w2 + balances[i] === w1 + balances[j]
//       ) {
//         return '' + balances[i] + ',' + balances[j];
//       }
//     }
//   }
   
//   return 'not possible';         
// }
// console.log(ScaleBalancing([5,9], [1,2,6,7]));

// // 

// const mainFunction = () => {
//   document.querySelector('.output').innerHTML = "";
//   let input1 = document.querySelector('.input1');
//   console.log(input1);
//   let input2 = document.querySelector('.input2');
//   let weightArr = JSON.parse(input1.value);
//   let balancesArr = JSON.parse(input2.value);
  
//     ScaleBalancing(weightArr, balancesArr);
//     let textnode = document.createTextNode(ScaleBalancing(weightArr, balancesArr));
//     let digit = document.querySelector('.output').appendChild(textnode);
//     digit;   
// }






