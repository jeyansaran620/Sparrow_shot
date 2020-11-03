import React from 'react';
import {  Button, Form, FormGroup, Label, Input,FormText,Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap'
import Loading from './loading';

class Forms extends React.Component{

    state = {
        quality: "100",
        url : "",
        urlDOne: true,
        format: "png",
        loading: false,
        imageName:'',
        fetchError: false
    }

    PostUrl = "https://sparrow-shot.herokuapp.com/shot" 
    ImageUrl = "https://sparrow-shot.herokuapp.com/"
    DownloadUrl = "https://sparrow-shot.herokuapp.com/download/"


    submitForm = (e) => 
    {
        e.preventDefault();
        if (!this.validateUrl(this.state.url))
        {
            this.setState({ urlDOne: false })
            return
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
            }

        const headers = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
        };

          fetch(this.PostUrl, headers )
          .then(res => res.json())
          .then(data => {
            this.setState({
                loading : false,
                imageName : data.url
            })
            finish = true
            }
            )
            .catch(
                error => {
                this.setState({
                    loading : false,
                    fetchError: true });
                    console.error('There was an error!', error);
                }
                )
                
            if (finish)
            {
            this.setState(
                {
                quality: "100",
                url : "",
                urlDOne: true,
                format: "png"
            })
        }
        }
    }

    validateUrl = (str) =>
    {
        if (str.split(" ").length > 1)
        return false
        var pattern = new RegExp('((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    } 

    handleFormatChange = (event) =>
    {
      this.setState({format: event.target.value})
    }

    handleUrlChange = (event) =>
      {
        this.setState({
            url: event.target.value,
            urlDOne: this.validateUrl(event.target.value)
        })
      }

    handleQualityChange = (event) =>
      {
        this.setState({quality: event.target.value})
      }

    render()
    {
 return (
    <div className="container">
    <Form className="form">
    <FormGroup row className="p-2">
      <Label className="col-4 text-center" for="URL" ><h5>URL</h5></Label>
      <div className="col-8 col-md-6 justify-content-center">
        <Input type="email" style={{height:"2rem"}} id="URL" placeholder="Provide a URL"
         value={this.state.url} 
         onChange={(e) => this.handleUrlChange(e)} />
        <FormText>
            {this.state.urlDOne ? '' : 'Provide a Valid URL...!'}
        </FormText>
      </div>
    </FormGroup>

    <FormGroup row tag="fieldset" className="p-2" >
    <Label className="col-4 text-center"><h5>Format</h5></Label>
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
          <Label className="col-4 text-center" for="exampleSelect"><h5>Quality</h5></Label>
          <div className="col-7">
          <Input id="typeinp" type="range" min="10" max="100" value={this.state.quality} 
             onChange={(e) => this.handleQualityChange(e)} step="10"/>
          </div>
        </FormGroup>

    <FormGroup check className="row p-2">
      <div className="col-4 offset-8">
        <Button style={{backgroundColor:"rgb(50,50,50)",color:"floralWhite"}} onClick={(e) => this.submitForm(e)}>Capture</Button>
      </div>
    </FormGroup>
  </Form>
  {!this.state.loading ? null : 
    <Loading className="row"/>
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
 )
} 
}

export default Forms;