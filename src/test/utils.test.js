import { fetchTimeline } from '../utils.js';

test('fetch timeline test', done => {
  	function callback(data) {
    	expect(data).toBe('peanut butter');
    	done();
  	}

  	fetchData(callback);
});
