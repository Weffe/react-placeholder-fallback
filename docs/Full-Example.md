# Full Example using react-placeholder-fallback

Here we are making a network request and want to show a custom placeholder while we fetch the data.
If the network request fails, then let's show a custom fallback. One thing to keep in mind when using this library,
is you are in full control of when to render the `PlaceholderFallback` or not.

## Tip

It's advised that if you using an ajax library like `axios` which provides the ability to set a custom timeout value.
Then, you should make sure the timeout value is the same for both `PlaceholderFallback` and the ajax 
library (e.g. `axios`). If you don't then you face a possible issue with the network request:

1. The request takes longer than the timeout of `PlaceholderFallback` and may complete even though by that time the
fallback is already shown. Thus, showing the completed state even though the fallback was just shown. (This might confuse users)

```JSX
// MyPlaceholder.js

import * as React from 'react';

export class MyPlaceholder extends React.Component {
    render() {
        return (
            <div>
                My Custom Placeholder! :)
            </div>
        )
    }
}
```

```JSX
// App.js

import * as React from 'react';
import { PlaceholderFallback } from 'react-placeholder-fallback';
import { MyPlaceholder } from './MyPlaceholder';
import { getData } from './api';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }
    
    componentDidMount() {
        // start network request
        // getData is a made up function that makes the network request
        // and returns a Promise with the data
        const responseData = await getData();

        this.setState({ data: responseData });
    }

    renderFallback = () => {
        return (
            <p>My fallback message!</p>
        )
    }

    render() {
        const { data } = this.state;

        if (data === null) {
            return (
                <PlaceholderFallback placeholder={MyPlaceholder} fallback={this.renderFallback} timeout={1500} />
            )
        }

        return (
            <h1>Here is the fetched data!</h1>
            <p>{data}</p>
        )
    }
}
```
