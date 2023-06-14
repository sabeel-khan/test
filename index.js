const express = require('express');
const app = express();

function get_operators() {
  return ['Airtel', 'Vodafone', 'Jio'];
}

function get_supported_operators() {
  operators_quick_replies = [];

  operators = get_operators();

  for(i = 0; i < operators.length; i++) {
    operators_quick_replies.push({
      'title': operators[i],
      'action': {
        'next_block': 'Get_Plans_Wait',
        'variables': {
          'operator': operators[i]
        }
      }
    });
  }

  return {
    'next_block': 'Show_Operators',
    'variables' : {},
    'exports': {
      'OperatorList': operators_quick_replies
    }
  }
}


app.get('/test', (req, res) => {
    
    const operators = get_supported_operators();

    res.send(operators);
});



const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started at port ${port}`));