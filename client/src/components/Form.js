import React from 'react';
import {  Button, Form, FormGroup, Label, Input,FormText,Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Loading from './Loading';

class Forms extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quality: "100",
            url : "",
            urlDOne: true,
            format: "png",
            loading: false,
            imageName:'',
            fetchError: false
        };

        this.PostUrl = "https://sparrow-shot.herokuapp.com/shot";
        this.ImageUrl = "https://sparrow-shot.herokuapp.com/";
        this.DownloadUrl = "https://sparrow-shot.herokuapp.com/download/";
    }
    

   

    submitForm(e)
    {
        e.preventDefault();
        if (!this.validateUrl(this.state.url))
        {
            this.setState({ urlDOne: false });
            return;
        }
        else
        { 
            let finish = false; 
            this.setState({
                loading : true,
                fetchError : false,
                imageName : ''
            });

            const config = {
                url:this.state.url,
                quality : this.state.quality,
                format: this.state.format
            };

            const headers = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            };

            fetch(this.PostUrl, headers )
                .then(res => res.json())
                .then(data => {
                    if(!data.url)
                    {   
                        this.setState({
                            loading : false,
                            fetchError: true
                        });
                        return;
                    }
                    this.setState({
                        loading : false,
                        imageName : data.url
                    });
                    finish = true;
                })
                .catch(
                    error => {
                        this.setState({
                            loading : false,
                            fetchError: true
                        });
                        console.error('There was an error!', error);
                    });
                
            if (finish)
            {
                this.setState({
                    quality: "100",
                    url : "",
                    urlDOne: true,
                    format: "png"
                });
            } 
        }
    }

    validateUrl(str)    
    {
        if (str.split(" ").length > 1)
            return false;
        const pattern =/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

        return Boolean(pattern.test(str));
    } 

    handleFormatChange(event)
    {
        this.setState({format: event.target.value});
    }

    handleUrlChange(event)
    {
        this.setState({
            url: event.target.value,
            urlDOne: this.validateUrl(event.target.value)
        });
    }

    handleQualityChange(event)
    {
        this.setState({quality: event.target.value});
    }

    render()
    {
        return (
            <div className="container">
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>

                    <FormGroup row className="p-2">
                        <Label className="col-4 text-center" for="URL" ><h5>URL:</h5></Label>
                        <div className="col-8 col-md-6 justify-content-center">
                            <Input type="string" style={{height:"2rem"}} id="URL" placeholder="Provide a URL"
                                value={this.state.url} onChange={(e) => this.handleUrlChange(e)} />
                            <FormText>
                                {this.state.urlDOne ? '' : <h5 style={{color:"floralWhite"}}>Provide a Valid URL...!</h5>}
                            </FormText>
                        </div>
                    </FormGroup>

                    <FormGroup row tag="fieldset" className="p-2" >
                        <Label className="col-4 text-center"><h5>Format:</h5></Label>
                        <FormGroup check className="col">
                            <Label check for ="png" style={{color:"floralWhite"}}>
                                <Input type="radio" id="png" value="png" checked={this.state.format === 'png'} 
                                    onChange={(e) => this.handleFormatChange(e)}/>{' '}png
                            </Label>
                        </FormGroup>
                        <FormGroup check className="col">
                            <Label check for="jpg" style={{color:"floralWhite"}}>
                                <Input type="radio" id="jpg" value="jpg" checked={this.state.format === 'jpg'} 
                                    onChange={(e) => this.handleFormatChange(e)}/>{' '}jpg
                            </Label>
                        </FormGroup>
                    </FormGroup>
                
                    <FormGroup row>
                        <Label className="col-4 text-center" for="exampleSelect"><h5>Quality:</h5></Label>
                        <div className="col-7">
                            <Input id="typeinp" type="range" min="10" max="100" value={this.state.quality} 
                                onChange={(e) => this.handleQualityChange(e)} step="10"/> 
                            {this.state.quality} 
                        </div>
                    </FormGroup>

                    <FormGroup check className="row p-2">
                        <div className="col-4 offset-7">
                            <Button style={{backgroundColor:"rgb(50,50,50)",color:"floralWhite"}}
                                type = "submit" disabled={this.state.loading} onClick={(e) => this.submitForm(e)}>Capture</Button>
                        </div>
                    </FormGroup>
                </Form>
                
                {!this.state.loading ? null : 
                    <Loading className="row justify-content-center"/> 
                } 
                {!this.state.fetchError ? null : 
                    <div className= "messages">There is a Inconvenience... Try Again</div> 
                }
                {this.state.imageName === '' ? null : 
                    <div> 
                        <Card className ="container">
                            <CardImg top width="100%" src={this.ImageUrl+this.state.imageName} alt={"."} />
                            <CardBody>
                                <CardTitle>ScreenShot Ready !!!</CardTitle>
                                <CardText>If this not the Shot you requested for, Kindly regret the Inconvenience... </CardText>
                                <Button href={this.DownloadUrl+this.state.imageName}>Download</Button>
                            </CardBody>
                        </Card>
                    </div> 
                }
            </div>
        );
    } 
}

export default Forms;