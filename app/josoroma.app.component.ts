import {Component} from 'angular2/core';

/**
 * @The Component decorator add some metadata to the JosoromaAppComponent
 * Class. Is a declarative way to add metadata to code.
 *
 * @Component is an annotation that tells Angular, that the class, which the
 * annotation is attached to, is a component.
 */
@Component({
    selector: 'josoroma-app-component',
    /**
     * A component has a template, which describes how the component is
     * rendered on the page.
     *
     * A component is a directive with a template. But We can still write
     * decorator-style directives, which do not have templates.
     */
    templateUrl: './app/josoroma.app.component.html',
    styleUrls: ['./app/josoroma.app.component.css']
})
// JosoromaAppComponent Class has one annotation: @Component.
export class JosoromaAppComponent { }
