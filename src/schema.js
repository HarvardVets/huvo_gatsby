import PropTypes from "prop-types"

export const Question = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
