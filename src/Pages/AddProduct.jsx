import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#CD9F61",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#CD9F61"
  },
  body: {
    backgroundColor: "#CD9F61"
  }
}));

export default class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      price: 0,
      sellerId: 0
    };
  }

  async AddProduct() {
    const data = { name: this.state.name, description: this.state.description, price: this.state.price, sellerId: this.state.price };

    const rawResponse = await fetch('http://localhost:8080/product', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(data)
    });
    const content = rawResponse;
    var myheaders = new Headers();
    myheaders.get('Not-Set');
    myheaders = content.headers;

    console.log(myheaders.get('Authorization'));
    localStorage.setItem('JWT', myheaders.get('Authorization'))

    if (myheaders.get('Authorization')) {
      window.location.replace('/index')
    }
  }

  updateName(name) {
    this.setState({ name: name.target.value })
  }

  updateDescription(description) {
    this.setState({ description: description.target.value })
  }

  updatePrice(price) {
    this.setState({ price: price.target.value })
  }

  render() {
    const classes = useStyles

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={this.state.name}
              onChange={this.updateName.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="current-description"
              value={this.state.description}
              onChange={this.updateDescription.bind(this)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="price"
              id="price"
              label="Price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              id="loginBtn"
              onClick={() => this.AddProduct()}>
              Add product
          </Button>
          </form>
        </div>
      </Container>
    );
  }
}