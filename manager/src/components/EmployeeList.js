import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

/*  Classe criada na aula
class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

         this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //nextProps re the nextet of props that this component
        //will be rendered with
        //this.props still the old props
        this.createDataSource(nextProps); 
    }

    createDataSource() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.DataSource = ds.cloneWithRows(this.props.employees);        
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    renderItem({ item }) {
        return <ListItem employee={item} />;
    }

    render() {
        console.log(this.props);
        return (
           
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
*/
// Classe criada nos comentários
class EmployeeList extends Component {
    componentWillMount() {
      this.props.employeesFetch();
    }
   
    renderItem({ item }) {
      return <ListItem employee={item} />;
    }
   
    render() {
      return (
        <FlatList
            data={this.props.employees}
            renderItem={this.renderItem}
        />
      );
    }
  }

const mapStatetoProps = state => {
     const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
     });

     return { employees };
};

export default connect(mapStatetoProps, { employeesFetch })(EmployeeList);
