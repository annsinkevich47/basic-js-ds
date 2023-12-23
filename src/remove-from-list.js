const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  
  let obj = {
    head: l,
    length: l.length
  }

  function rem (positions) {
    for (let i = 0; i < positions.length; i++) {
      positions.join("");
      let position = Number(positions[i]);


      let current = obj.head;
      
      if (position === 0) {
        obj.head = current.next;
      } else {
        let prev = null;
        let index = 0;

        if (i === 1) {
          while (index < position - 1) {
            prev = current;
            current = current.next;
            index++;
          }
        } else {
          while (index < position ) {
            prev = current;
            current = current.next;
            index++;
          }
        }
        prev.next = current.next;
      }
    }
    obj.length--;
    return obj.head;
  }


  function remot (element) {
    return rem(get(element));
  }



  function get (element) {
    let current = l;
    let newArr = []
    let index = 0;

    while (current) {
      if (current.value === element) {
        
        newArr.push(index)
      }
      if (current.next == null) {
        return newArr;
      }
      current = current.next;
      index++;
    }
    
  }
  return remot(k);
}


module.exports = {
  removeKFromList
};
