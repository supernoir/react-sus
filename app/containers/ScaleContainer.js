import { connect } from 'react-redux';
import { addScaleInput } from '../actions';
import Scale from '../scale/Scale';

const mapStateToProps = state => ({
	scales: state.addScaleInput
});

const mapDispatchToProps = (dispatch) => ({ addScaleInput: (scale) => dispatch(scale) });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scale);