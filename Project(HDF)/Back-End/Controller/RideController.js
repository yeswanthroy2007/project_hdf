const Ride = require('../Model/Ride');

// POST: Add a ride
const addRide = async (req, res) => {
    const { from, to, dateTime } = req.body;
    try {
        const ride = await Ride.create({ from, to, dateTime});
        res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ message: "Error adding ride", error });
    }
};

// POST: Find a ride
const findRide = async (req, res) => {
    const { from, to, dateTime } = req.body;
    try {
        const rides = await Ride.find({
            from,
            to,
            dateTime: { $gte: new Date(dateTime) }
        });
        res.status(200).json(rides);
    } catch (error) {
        res.status(500).json({ message: "Error finding rides", error });
    }
};

module.exports = { addRide, findRide };
