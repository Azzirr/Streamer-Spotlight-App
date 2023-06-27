const mongoose = require('mongoose');
const setImage = require('./staticImages');

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
            required: [true, 'Please add image'],
            default: 'https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg'
        },
        streamingPlatformImage: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

streamerSchema.pre('save', function (next) {
    const platform = this.streamingPlatform;
    if (platform === 'Twitch') {
      this.streamingPlatformImage = setImage.staticImages.twitchImage
    } else if (platform === 'Youtube') {
      this.streamingPlatformImage = setImage.staticImages.youtubeImage
    } else if (platform === 'Kick') {
      this.streamingPlatformImage = setImage.staticImages.kickImage
    } else if (platform === 'Rumble') {
        this.streamingPlatformImage = setImage.staticImages.rumbleImage
    } else if (platform === 'TikTok') {
        this.streamingPlatformImage = setImage.staticImages.tiktokImage
    } else {
      this.streamingPlatformImage = setImage.staticImages.defaultImage;
    }
    next();
});

const Streamer = mongoose.model('Streamer', streamerSchema);
module.exports = Streamer;