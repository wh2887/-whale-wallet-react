let payId = parseInt(window.localStorage.getItem('payIdMax') || '0');
let addId = parseInt(window.localStorage.getItem('addIdMax') || '0');

const createId = (categoryType: Category) => {
  if (categoryType === '-') {
    payId += 1;
    window.localStorage.setItem('payIdMax', payId.toString());
    return payId;
  } else {
    addId += 1;
    window.localStorage.setItem('addIdMax', addId.toString());
    return addId;
  }
};

export {createId};