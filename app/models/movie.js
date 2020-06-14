import Model from '@ember-data/model';

export default class MovieModel extends Model {
    @attr title;
    @attr original_title;
    @attr date;
    @attr popularity;
    @attr votes;
}
