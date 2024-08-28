import { render, prettyDOM, fireEvent } from '@testing-library/react';
import Game from '../Game';

describe('Testing for cheating AI', () => {
    // Change the cheat state when clicking on the robot emoji
    // Happy path
    // Cheating state is activated/true
    // let robotIcon
    // let playerSelection
    // beforeEach(()=> {
    //     // We need a way to simulate the Game component
    //     const { getByTestId } = render(<Game />);
    //     // We need a way to target the robot icon
    //     robotIcon = getByTestId("robot-icon");
    //     // We need a way to simulate a user clicking on an emoji, within the app
    //     fireEvent.click(robotIcon);
    // })
    test('cheating is activated when user click on robot emoji', () => {
        
        const { getByTestId } = render(<Game />);
        // We need a way to target the robot icon
        const robotIcon = getByTestId("robot-icon");
        // We need a way to simulate a user clicking on an emoji, within the app
        fireEvent.click(robotIcon);
        // If the robot icon has a class of cheating, then cheating is enabled
        expect(robotIcon).toHaveClass('cheating');
    })
    // Sad Path
    // What happens if the user clicks on the robot emoji twice? Then cheating is state is set to false
    test('cheating is deactivated when user clicks on robot emoji twice', () => {
        const { getByTestId } = render(<Game />);
        // We need a way to target the robot icon
        const robotIcon = getByTestId("robot-icon");
        // We need a way to simulate a user clicking on an emoji, within the app
        fireEvent.click(robotIcon);
        // Another to deactivate
        fireEvent.click(robotIcon);
        // If the robot icon has a class of cheating, then cheating is enabled
        expect(robotIcon).not.toHaveClass('cheating');
    })
    // Test if the robot can cheat and beat the player
    // Happy path
    test('Robot can cheat and beat the player, if the player selected Rock', ()=> {
        const { getByTestId, debug } = render(<Game />);
        // We need a way to target the robot icon
        const robotIcon = getByTestId("robot-icon");
        // We need a way to simulate a user clicking on an emoji, within the app
        fireEvent.click(robotIcon);
        // First create a player selection, Rock
        const playerSelection = getByTestId('Rock');
        fireEvent.click(playerSelection);
        // Once the player makes a selection, the AI will have to make its own winning selection
        // Select the game result
        const resultMessage = getByTestId("game_result");
        // Verify if the player lost by checking the result text
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.');
    })
    // Robot can cheat and beat the player if the player selected Rock
    // Robot can cheat and beat the player if the player selected Scissors
    test('Robot can cheat and beat the player, if the player selected Scissors', ()=> {
        const { getByTestId, debug } = render(<Game />);
        // We need a way to target the robot icon
        const robotIcon = getByTestId("robot-icon");
        // We need a way to simulate a user clicking on an emoji, within the app
        fireEvent.click(robotIcon);
        // First create a player selection, Rock
        const playerSelection = getByTestId('Scissors');
        fireEvent.click(playerSelection);
        // Once the player makes a selection, the AI will have to make its own winning selection
        // Select the game result
        const resultMessage = getByTestId("game_result");
        // Verify if the player lost by checking the result text
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.');
    })
    // Robot can cheat and beat the player if the player selected Paper
    test('Robot can cheat and beat the player, if the player selected Paper', ()=> {
        const { getByTestId, debug } = render(<Game />);
        // We need a way to target the robot icon
        const robotIcon = getByTestId("robot-icon");
        // We need a way to simulate a user clicking on an emoji, within the app
        fireEvent.click(robotIcon);
        // First create a player selection, Rock
        const playerSelection = getByTestId('Paper');
        fireEvent.click(playerSelection);
        // Once the player makes a selection, the AI will have to make its own winning selection
        // Select the game result
        const resultMessage = getByTestId("game_result");
        // Verify if the player lost by checking the result text
        expect(resultMessage.innerHTML).toBe('Too bad! Better luck next time.');
    })
});