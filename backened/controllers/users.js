import User from "../models/User.js"

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getUserFriends = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        let user = await User.findById(id)
        let friend = await User.findById(friendId)
        console.log("ghj");
        if (user.friends.includes(friendId)) {
            console.log("jk");
            // user=await User.updateOne({ _id: id }, { $pull:{friends:friendId}})
            // friend=await User.updateOne({ _id: friendId }, { $pull:{friends:id}})
            user.friends=user.friends.filter((id) => id != friendId)
            friend.friends=friend.friends.filter((i) => i != id)
        }
        else {
            user.friends.push(friendId)
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        console.log(friends);
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    }
    catch (err) {
        res.status(404).json({ message: err.message })
    }

}
