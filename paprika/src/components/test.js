const ReactDataGrid = require('react-data-grid');
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');
const exampleWrapper = require('../components/exampleWrapper');
const React = require('react');

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._columns = [
      {
        key: 'id',
        name: 'ID',
        width: 80
      },
      {
        key: 'task',
        name: 'Title',
        filterable: true,
        sortable: true
      },
      {
        key: 'priority',
        name: 'Priority',
        filterable: true,
        sortable: true
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        filterable: true,
        sortable: true
      },
      {
        key: 'complete',
        name: '% Complete',
        filterable: true,
        sortable: true
      },
      {
        key: 'startDate',
        name: 'Start Date',
        filterable: true,
        sortable: true
      },
      {
        key: 'completeDate',
        name: 'Expected Complete',
        filterable: true,
        sortable: true
      }
    ];

    this.state = { rows: this.createRows(1000), filters: {}, sortColumn: null, sortDirection: null };
  }

  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };

  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
      rows.push({
        id: this.state.tracks_ids[i],
        title: this.state.all_tracks_data[i].track.name,
        artist: this.state.all_tracks_data[i].track.artists[0].name,
        length: this.state.all_tracks_data[i].track.duration_ms,
      });
    }
    return rows;
  };

  getRows = () => {
    return Selectors.getRows(this.state);
  };

  getSize = () => {
    return this.getRows().length;
  };

  rowGetter = (rowIdx) => {
    const rows = this.getRows();
    return rows[rowIdx];
  };

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection });
  };

  handleFilterChange = (filter) => {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }

    this.setState({ filters: newFilters });
  };

  onClearFilters = () => {
    this.setState({ filters: {} });
  };

  render() {
    return  (
      <ReactDataGrid
        onGridSort={this.handleGridSort}
        enableCellSelect={true}
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this.getSize()}
        minHeight={500}
        toolbar={<Toolbar enableFilter={true}/>}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilters} />);
  }
}

const exampleDescription = (
  <div>
    <p>While ReactDataGrid does not provide the ability to sort or filter directly, it does provide hooks that allow you to provide your own sort and filter function. This is done via the <code>onGridSort</code> and <code>onAddFilter</code> props. To enable sorting for a given column, set <code>column.sortable = true</code> for that column, to enable filtering for a given column, set <code>column.filterable = true</code> for that column. Now when the header cell is clicked for that column, <code>onGridSort</code> will be triggered passing the column name and the sort direction, when the filterable cell has a new filter value entered for that column, <code>onAddFilter</code> will be triggered passing the filter key and value.
    </p>
  </div>
);

module.exports = exampleWrapper({
  WrappedComponent: Example,
  exampleName: 'Filterable Sortable Columns Example',
  exampleDescription,
  examplePath: './scripts/example16-filterable-sortable-grid.js',
  examplePlaygroundLink: undefined
});