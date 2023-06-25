const mongoose = require('mongoose');

const streamerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter streamer name']
        },
        streamingPlatform: {
            type: String,
            required: [true, 'Please choose platform']
        },
        description: {
            type: String,
            required: [false]
        },
        votes: {
            type: Number,
            default: 0
        },
        image: {
            type: String,
            required: [true, 'Please add image']
        }
    },
    {
        timestamps: true
    }
)

const Streamer = mongoose.model('Streamer', streamerSchema);
module.exports = Streamer