const mapping = {
	a: ["b", "c"],
	b: ["d", "g"],
	d: ["p", "q"],
	l: ["x", "y"],
};

const mutualFriends = (mapping, person) => {
	const personFriendList = mapping[person];
	if (personFriendList && personFriendList.length > 0) {
		const finalList = [...personFriendList];
		for (let friend of personFriendList) {
			const otherFriends = mutualFriends(mapping, friend);
			finalList.push(...otherFriends);
		}
		return finalList;
	}
	return [];
};

const res = mutualFriends(mapping, "x");
console.log(res);
