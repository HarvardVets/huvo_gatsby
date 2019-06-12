import React from 'react';

export default class DragAndDrop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			dragging: false
		}
		this.handleDrop = this.handleDrop.bind(this);
		this.handleDragIn = this.handleDragIn.bind(this);
		this.handleDragOut = this.handleDragOut.bind(this);
		this.handleDrag = this.handleDrag.bind(this);
	}

	dropRef = React.createRef();

	componentDidMount(){
		let div = this.dropRef.current;
		this.dragCounter = 0;
		div.addEventListener('dragenter', this.handleDragIn);
    div.addEventListener('dragleave', this.handleDragOut);
    div.addEventListener('dragover', this.handleDrag);
    div.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount(){
		let div = this.dropRef.current;
		div.removeEventListener('dragenter', this.handleDragIn);
    div.removeEventListener('dragleave', this.handleDragOut);
    div.removeEventListener('dragover', this.handleDrag);
    div.removeEventListener('drop', this.handleDrop);
	}

	handleDragIn(e){
		e.preventDefault();
		e.stopPropagation();

		console.log(this.state.dragging);
		this.dragCounter++;
		console.log(this.dragCounter);
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    	this.setState({dragging: true})

  	}
	}

	handleDragOut(e){
		e.preventDefault();
		e.stopPropagation();

		this.dragCounter--;
		console.log(this.dragCounter);

		if(this.dragCounter <= 0){
			this.setState({
				dragging: false
			})
		}
	}

	handleDrag(e){
		e.preventDefault();
		e.stopPropagation();
	}

	handleDrop(e){
		e.preventDefault();
		e.stopPropagation();

		this.setState({
			dragging: false
		});

  	if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
    	this.props.handleDrop(e.dataTransfer.files);
    	e.dataTransfer.clearData();
    	this.dragCounter = 0;
  	}
	}

	// Put this in the parent component
	// handleDrop(file){
	// 	console.log(file[0]);
	// }

	render(){
		return(
			<div ref={this.dropRef} style={{display: 'inline-block', position: 'relative'}}>
				{this.state.dragging &&
          <div
            style={{
              border: 'dashed grey 4px',
              backgroundColor: 'rgba(255,255,255,.8)',
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 9999
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                left: 0,
                textAlign: 'center',
                color: 'grey',
                fontSize: 36
              }}
            >
              <div>drop here :)</div>
            </div>
          </div>
        }
        {this.props.children}
			</div>
		)
	}
}
