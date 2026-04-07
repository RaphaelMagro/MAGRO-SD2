let friends = [];

function showFriends() {
    if(friends.length <= 0) {
        console.log("You have no friends yet.");
    } else {
        console.log("Your friends are: " + friends .join(", "));
    }
}

function addFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());
    if(checkFriend == true) {
        console.log(name + " is already in your friend list.");
    } else {
        friends.push(name.toUpperCase());
        console.log(name + " has been added to your friend list.");
    }
}

function removeFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());
    if(checkFriend == true) {
        friends.forEach(function(friend, index) {
            if(friend === name.toUpperCase()) {
                friends.splice(index, 1);
                console.log(name + " has been removed from your friend list.");
            }
        });
    } else {
        console.log(name + " is not in your friend list.");
    }
}

