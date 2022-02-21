package org.vaadin.example;

import com.vaadin.flow.component.Key;
import com.vaadin.flow.component.Unit;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.details.Details;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.data.provider.ListDataProvider;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.PWA;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * The main view contains a button and a click listener.
 */
@Route("")
@PWA(name = "Project Base for Vaadin", shortName = "Project Base", enableInstallPrompt = false)
@CssImport("./styles/shared-styles.css")
@CssImport(value = "./styles/vaadin-text-field-styles.css", themeFor = "vaadin-text-field")
public class MainView extends VerticalLayout {

    public MainView() {
        setWidthFull();
        add(new Label("Steps to reproduce:"));
        add(new Label("1. Reduce the height of the browser window so that a vertical page scrollbar appears"));
        add(new Label("2. Click on the 'Focus me' field to focus it"));
        add(new Label("3. Scroll down using the page scrollbar until the Details header is no longer visible"));
        add(new Label("4. Click on any name entry to trigger the item click listener\n\n" +
                "-> the page will jump up to display the Detail header, then jump back down to the clicked entry without " +
                "triggering the item click listener. Now that the component actually has the focus, click the item again " +
                "and this time the  item click listener will respond correctly without jumping"));


        add(new TextField("Focus me"));
        Details details = new Details("Scroll the page down until I'm no longer visible", buildGrid());
        details.setOpened(true);
        add(details);
    }

    private Grid<SimpleUser> buildGrid() {
        final List<SimpleUser> users = IntStream.range(1, 100).mapToObj(val -> new SimpleUser("User" + val)).collect(Collectors.toList());

        Grid<SimpleUser> userGrid = new Grid<>(SimpleUser.class);
        userGrid.setWidthFull();
        userGrid.setHeight(2000, Unit.PIXELS); // just a quick way to enforce a vertical browser scrollbar without having to reduce the browser window size. Not really necessary.
        userGrid.setDataProvider(new ListDataProvider<>(users));

        userGrid.addItemClickListener(ev -> Notification.show("Item clicked!"));
        userGrid.addComponentColumn(e -> {
            Button button = new Button("Buttons seem to work");
            button.addClickListener(ev -> Notification.show("Button clicked!"));
            return button;
        });

        return userGrid;
    }
}
