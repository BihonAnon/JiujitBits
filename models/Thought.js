const { Schema, Types } = require('mongoose');
const { Thought } = require('.');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      thoughts: [reactionSchema]
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false,
  }
);

module.exports = Thought;
