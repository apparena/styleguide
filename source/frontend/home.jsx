import React from 'react';
import PropTypes from 'prop-types';
import * as components from './components/index';
import componentsList from './components/list.json';
import cloneDeep from 'lodash/cloneDeep';
import {Alert, Card, Col, FormGroup, Input, Nav, Navbar, NavItem, NavSecondaryGroup, ReactComponent, Row, Table} from '../patterns/index';
import styles from './styles/home.module.scss';
import {Route, Link} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import staticPages from '../pages/index';
import {hot} from 'react-hot-loader';
import HomePage from '../pages/home';

const transitionStyles = {
    atEnter: {
        opacity: .25,
        x: 1,
        position: 1
    },
    atLeave: {
        opacity: .25,
        x: 1,
        position: 1
    },
    atActive: {
        opacity: 1,
        x: 0,
        position: 0
    }
};

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.x * 1000}px)`,
        position: styles.position === 0 ? 'relative' : 'absolute',
        width: '100%'
    };
}

class Home extends ReactComponent {
    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object
    };

    getInitState() {
        const categories = componentsList;
        this.backupCategories = categories;
        const minimizedCategories = categories.map((_) => {
            return true;
        });
        minimizedCategories[-1] = true;

        return {
            searchQuery: '',
            categories,
            minimizedCategories,
            currentStaticPage: false
        };
    }

    componentDidMount() {
        this.setCurrentStaticPage(this.props);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        this.setCurrentStaticPage(nextProps);
    }

    setCurrentStaticPage(props) {
        const match = staticPages.filter((staticPage) => {
            return staticPage.route === props.location.pathname.slice(1);
        });

        if (match.length >= 1 && (match[0].page !== this.state.currentStaticPage.page || match[0].route !== this.state.currentStaticPage.route)) {
            this.setState({
                currentStaticPage: match[0]
            });
        } else if (match.length >= 1 && this.state.currentStaticPage === false) {
            this.setState({
                currentStaticPage: match[0]
            });
        } else if (match.length === 0 && this.state.currentStaticPage !== false) {
            this.setState({
                currentStaticPage: false
            });
        }
    }

    search(e) {
        this.setState({
            searchQuery: e.target.value
        }, () => {
            if (this.state.searchQuery !== '') {
                const categories = cloneDeep(this.backupCategories);

                Object.keys(categories).forEach((cat) => {
                    categories[cat].componentList = categories[cat].componentList.filter((comp) => {
                        return comp.toLowerCase().includes(this.state.searchQuery.toLowerCase());
                    });

                    categories[cat].visible = categories[cat].componentList.length !== 0;
                });

                this.setState({
                    categories
                });
            } else {
                this.setState({
                    categories: this.backupCategories
                });
            }
        });
    }

    toggleCategory(index) {
        const minimizedCategories = this.state.minimizedCategories;
        minimizedCategories[index] = !minimizedCategories[index];

        this.setState({
            minimizedCategories
        });
    }

    scrollToTop() {
        window.scrollBy({
            top: -2000,
            behavior: 'smooth'
        });
    }

    renderStaticPageSidebar() {
        if (this.state.currentStaticPage) {
            const items = staticPages.map((page, i) => {
                if (page.position === 'sidebar' && page.page === this.state.currentStaticPage.page) {
                    return (
                        <NavItem key={i} active={this.state.currentStaticPage.route === page.route}>
                            <Link to={`/${page.route}`}>{page.component.title}</Link>
                        </NavItem>
                    );
                } else {
                    return null;
                }
            });

            return (
                <Nav className={styles.sidebarStaticPages} vertical>
                    {items}
                </Nav>
            );
        }
    }

    renderCategories(category, index) {
        if (category.visible) {
            return (
                <NavSecondaryGroup
                    title={category.name}
                    key={index}
                    onClick={this.toggleCategory.bind(this, index)}
                    className={styles['category-nav-title']}
                >
                    <Nav pills vertical>
                        {this.state.minimizedCategories[index] === true ? category.componentList.map((component, i) => {
                            return (
                                <NavItem key={i} active={this.props.location.pathname.split('/')[1] === component}>
                                    <Link to={`/ui-patterns/${component}`} onClick={this.scrollToTop.bind(this)}>{component}</Link>
                                </NavItem>
                            );
                        }) : []}
                    </Nav>
                </NavSecondaryGroup>
            );
        }
    }

    renderTable(category, index) {
        return (
            <div key={index}>
                <h3>{category.name}</h3>
                <Table hover key={index}>
                    <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Latest
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {category.componentList.map((component, i) => {
                        return (
                            <tr key={`tr_${i}`}>
                                <td>
                                    <Link to={`/${component}`}>{component}</Link>
                                </td>
                                <td/>
                                <td/>
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }

    renderUIPatternsContainer() {
        return [
            <Alert type={"info"}>
              <p>
                This documentation will not be updated. We are currently working on a new documentation.
                You can check it already out <a href={"docs/index.html"}> here </a>
              </p>
            </Alert>,
            <Card>
                <div type="card-header">
                    Components
                </div>
                <div type="card-body">
                    <p>
                        These React components will help you build App-Arena applications
                        and
                        add-ons.
                    </p>
                    {this.state.categories.map(this.renderTable)}
                </div>
            </Card>
        ];
    }

    renderStaticPageLinks() {
        return staticPages.map((page, i) => {
            if (page.position === 'top') {
                // Use '/route' instead of 'route' for nested routes like 'example/example-item', otherwise there
                // seems to be a bug where the URL will become 'example/example/example-item'
                return (
                    <NavItem key={i}>
                        <Link to={`/${page.route}`} onClick={this.scrollToTop.bind(this)}>{page.title}</Link>
                    </NavItem>
                );
            } else {
                return null;
            }
        });
    }

    renderContent(){
        if (this.props.location.pathname === '/') {
            return <HomePage/>
        } else {
            return <Row>
                <Col lg="3" sm="4" xs="5">
                    <div className={styles.sidebar}>
                        {!this.state.currentStaticPage && (
                            <div className={styles.searchBox}>
                                <FormGroup>
                                    <Input
                                        icon="icon icon-search"
                                        id="searchInput"
                                        placeholder="Search component..."
                                        onChange={this.search.bind(this)}
                                        defaultValue={this.state.searchQuery}
                                    />
                                </FormGroup>
                            </div>
                        )}
                        {this.state.currentStaticPage === false && this.state.categories.map(this.renderCategories.bind(this))}
                        {this.state.currentStaticPage !== false && this.renderStaticPageSidebar()}
                    </div>
                </Col>
                <Col lg="9" sm="8" xs="7" className={styles.container}>
                    <AnimatedSwitch
                        atEnter={transitionStyles.atEnter}
                        atLeave={transitionStyles.atLeave}
                        atActive={transitionStyles.atActive}
                        mapStyles={mapStyles}
                    >
                        {Object.keys(components).map((component, i) => {
                            return <Route exact path={`/ui-patterns/${component}`} component={components[component]} key={component + i}/>;
                        })}
                        {staticPages.map((page, i) => {
                            return <Route exact path={`/${page.route}`} component={page.component.render} key={page.route + i}/>;
                        })}
                    </AnimatedSwitch>

                    {this.props.location.pathname === '/ui-patterns' ? this.renderUIPatternsContainer() : null}
                </Col>
            </Row>
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <Row>
                    <Col xs="12">
                        <Navbar className={styles['navbar-light']}>
                            <Row>
                                <Col autoWidth xsAutoContent>
                                    <Link className={styles.navbarBrand} to="/">
                                        <img className={styles.logo} src="https://s3.app-arena.com/brand/logos/AA_Logo_bright.svg" role="presentation"/>
                                    </Link>
                                </Col>
                                <Col autoWidth>
                                    <Nav>
                                        <NavItem>
                                            <Link to="/ui-patterns">UI Patterns</Link>
                                        </NavItem>
                                        {this.renderStaticPageLinks()}
                                    </Nav>
                                </Col>
                            </Row>
                        </Navbar>
                    </Col>
                </Row>
                {this.renderContent()}
            </div>
        );
    }
}

export default hot(module)(Home);
