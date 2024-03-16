export default {
  matchAlignValues:
    /^(_|(!?(center|start|end|between|around)))(\/(_|(!?(center|start|end|between|around))))?$/,
  matchWrapValues: /^!?(wrap|nowrap)$/,
  matchDirValues: /^!?-?(row|col)$/,
  matchGapValues: /^(_|(!?(\d+[a-z]+)))(\/(_|(!?(\d+[a-z]+))))?$/,

  valuesMapper: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    wrap: 'wrap',
    nowrap: 'nowrap',
    row: 'row',
    col: 'col',
    '-row': 'row-reverse',
    '-col': 'column-reverse'
  },

  baseStyles: ['display: flex;']
};
