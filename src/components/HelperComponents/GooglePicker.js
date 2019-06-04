import React from 'react';
import GooglePicker from 'react-google-picker';
import { Button } from 'react-bootstrap';

export default class GoogleDrive extends React.Component{


	selectImage(img){
		if(img && img.length > 0){
			this.props.setImageFromDrive(img);
		}
	}

	render(){
		return(
			<GooglePicker clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
	              developerKey={process.env.REACT_APP_GOOGLE_PICKER_KEY}
	              scope={['https://www.googleapis.com/auth/drive.readonly']}
								onChange={data => this.selectImage(data.docs)}
	              onAuthFailed={data => console.log('on auth failed:', data)}
	              multiselect={true}
	              navHidden={true}
	              authImmediate={false}
	              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
	              query={''}
	              viewId={'DOCS_IMAGES'}>
	   						<Button>Select from Google Drive</Button>
			</GooglePicker>
		)
	}

}
