import React, { Component } from 'react';
import moment from 'moment';

import { CompareList } from '../../components/CompareList';
import { Container, Form } from './style';

import api from '../../services/api';
import logo from '../../assets/logo.png';

export default class Main extends Component {
  state = {
    loadding: false,
    repositoryError: false,
    repositories: [] || [],
    repositoryInput: '',
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    this.setState({ loadding: true });
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loadding: false });
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />
        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">
            {this.state.loadding ? <i className="fa fa-spinner fa-pulse" /> : 'OK'}
          </button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
