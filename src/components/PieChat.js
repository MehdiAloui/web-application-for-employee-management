/*import React, { Component } from 'react';
import PieChart, {
    Series,
    Label,
    Legend,
} from 'devextreme-react/pie-chart';
import EmployeeService from '../servises/EmployeeService';


class PieChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: []
        }
    }

    componentDidMount() {
        EmployeeService.getNbrePerGender().then((res) => {
            this.setState({ count: res.data });
        });
    }



    render() {
        return (
            <div >
                <h1>hello</h1>
            </div>
        );
    }
}

export default PieChat;
*/
/*import React, { Component } from 'react';

import SelectBox from 'devextreme-react/select-box';
import PieChart, {
  Series,
  Label,
  Margin,
  Export,
  Legend,
  Animation,
} from 'devextreme-react/pie-chart';
import EmployeeService from '../servises/EmployeeService';


const resolveModes = ['shift', 'hide', 'none'];

class PieChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resolveMode: resolveModes[0],
      count:[]
    };
    this.setResolveMode = this.setResolveMode.bind(this);
  }
  componentDidMount() {
    EmployeeService.getNbrePerGender().then((res) => {
        this.setState({ count: res.data });
    });
}

  render() {
    return (
      <React.Fragment>
        <PieChart
          id="pie"
          dataSource={this.state.count.map}
          palette="Bright"
          title="Olympic Medals in 2008"
          resolveLabelOverlapping={this.state.resolveMode}
        >
          <Series
            argumentField="country"
            valueField="medals"
          >
            <Label visible={true} customizeText={formatText} />
          </Series>
          <Margin bottom={20} />
          <Export enabled={true} />
          <Legend visible={false} />
          <Animation enabled={false} />
        </PieChart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Label Overlapping Resolution Mode </span>
            <SelectBox
              dataSource={resolveModes}
              value={this.state.resolveMode}
              onValueChanged={this.setResolveMode}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  setResolveMode(count) {
    this.setState({
      resolveMode: data.value,
    });
  }
}

function formatText(arg) {
  return `${arg.argumentText} (${arg.percentText})`;
}

export default PieChat;*/
///////////////////////////////////////////////////////////////////:
import React, { Component } from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector,
} from 'devextreme-react/pie-chart';
import EmployeeService from '../servises/EnseignantService';

class PieChat extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count:[]
        };
      }
      componentDidMount() {
        EmployeeService.getNbrePerGender().then((res) => {
            this.setState({ count: res.data });
        });
    }
    
  render() {
    return (
      <PieChart id="pie"
        palette="Bright"
        dataSource={this.state.count}
        title="Gender "
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={4} />
        <Export enabled={true} />
        <Series argumentField="type" valueField="number">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} (${arg.percentText})`;
}

export default PieChat;


