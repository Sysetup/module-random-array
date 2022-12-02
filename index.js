/**
   ____             __             
  / __/_ _____ ___ / /___ _____ _/|
 _\ \/ // (_-</ -_) __/ // / _ > _<
/___/\_, /___/\__/\__/\_,_/ .__//  
    /___/                /_/       
> Systems development company.

*/

/**
 * 
 * @function randomArray This script shuffles the elements of an array.
 * @param {Array} arr 
 */

const randomArray = (arr) => {
    arr.sort(() => Math.random() - 0.5)
} 

export default randomArray