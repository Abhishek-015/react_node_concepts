const List = function (val) {
	this.val = val;
	this.next = null;
};

const list1 = new List(10);
const list2 = new List(20);
const list3 = new List(30);

list1.next = list2;
list2.next = list3;
list3.next = list1;

// PS  : console.log(JSON.stringify(list1));     This giver circular list error , we have to resolve this

function circularBreaker(obj) {
	const store = new WeakSet([obj]);
	console.log(JSON.stringify(store));
}

circularBreaker(list1);
