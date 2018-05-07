import React from 'react';
import Color from './Color/Color';
import SearchBar from '../SearchBar/SearchBar';
import MinColor from './MinColor/MinColor';

class ColorsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allColors: [
        // {"color":"#A167A5","id":1,"tags":["rearly purle"]},
        // {"color":"#CD5334","id":2,"tags":["dark coral","warm"]},
        // {"color":"#17BEBB","id":3,"tags":["tiffany blue","cold"]},
        // {"color":"#CEFF1A","id":4,"tags":["artic lime","warm"]},
        // {"color":"#00171F","id":5,"tags":["rich black","dark"]},
        // {"color":"#FFED66","id":6,"tags":["maize"]},
        // {"color":"#7B886F","id":7,"tags":["camouflage green"]},
        // {"color":"#FFBCB5","id":8,"tags":["melon"]},
        // {"color":"#FE9920","id":9,"tags":["deep saffron","warm"]},
        // {"color":"#D6EFFF","id":10,"tags":["azureish white","cold"]},
        // {"color":"#6D213C","id":11,"tags":["wine"]},
        // {"color":"#2E294E","id":12,"tags":["space cadet","cold","dark"]},
        // {"color":"#E3C16F","id":13,"tags":["straw"]},
        // {"color":"#5D3A00","id":14,"tags":["seal brown"]},
        // {"color":"#F9B9F2","id":15,"tags":["electric lavender"]},
        // {"color":"#4C5F6B","id":16,"tags":["deep space sparkle"]},
        // {"color":"#BED558","id":17,"tags":["june bud"]},
        // {"color":"#9FFCDF","id":18,"tags":["magic mint"]},
        // {"color":"#91C499","id":19,"tags":["eton blue"]},
        // {"color":"#247BA0","id":20,"tags":["lapis lazuli","cold"]}
      ],
      selected:[],
      search: "",
      isLoading: false,
    }
    this.filteredColors;
  }

  // Method to sort array of colors by id
  compare(a, b) {
    const first = a.id;
    const second = b.id;
  
    let comparison = 0;
    if (first > second) {
      comparison = 1;
    } else if (first < second) {
      comparison = -1;
    }
    return comparison;
  }

  //Method that chooses color by its id and adding color to selected 
  addColor(id) {
    let colors = [...this.state.allColors];
    var newindex = colors.map(function(e) { return e.id; }).indexOf(id);
    this.state.selected.push(colors[newindex]);
    this.setState(this.state);
    colors.splice(newindex, 1);
    this.setState({allColors: colors});
  }

  // Method that removes color by its index from selected array and adding back to all colors and sorting list by id 
  removeColor(index){
    let minColorList = [...this.state.selected];
    this.state.allColors.push(minColorList[index]);
    this.setState(this.state);
    minColorList.splice(index, 1);
    let copy = [...this.state.allColors];
    copy.sort(this.compare);
    this.setState({allColors: copy})
    this.setState({selected: minColorList, allColors: copy});
  }

  //updates search state when entering values to inpur search
  updateSearch(event){
    this.setState({search: event.target.value});
  }

  //fetching json and initialize state
  componentWillMount(){
    this.setState({isLoading: true})

    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({allColors: data, isLoading: false});
    });
  }

  //Updating allColors array when component is rendered
  componentDidMount(){
    this.setState({allColors: this.filteredColors})
  }

  render() {
    const isLoading = this.state.isLoading;
    if (isLoading){
      return <h1>Loading...</h1>;
    }

    //filtering list of colors by input value
    this.filteredColors = this.state.allColors.filter(item => {
        return item.tags.join(" ").toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    let colorsList = <h1>There are no colors found</h1>;
    if (!this.filteredColors.length == 0){
      colorsList = (
        <div className="ColorList">
          {this.filteredColors.map((item, index)=>{
            return <Color key={index} color={item.color} click={()=>this.addColor(item.id)}/>
          })}
        </div>
      );
    } 

    return (
      <div>
        <div className="top">
          <SearchBar
            search={this.state.search}
            change={this.updateSearch.bind(this)}
          />
          <div className="test">
            <div className="MiniList">
              {this.state.selected.map((item, index) => {
                  return <MinColor key={index} id={item.id} color={item.color} click={()=>this.removeColor(index)} />
              })}
            </div>
            <h1>Count: {this.filteredColors.length}</h1>
          </div>
        </div>
        {colorsList}
      </div>
    );
  }
}

export default ColorsList;

