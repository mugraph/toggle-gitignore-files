import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Toggle Git Ignore extension is now active');

    let disposable = vscode.commands.registerCommand('toggle-gitignore-files.toggleGitIgnore', async () => {
        // Get the current configuration
        const config = vscode.workspace.getConfiguration();
        const currentValue = config.get('explorer.excludeGitIgnore');
        
        // Toggle the value
        const newValue = !currentValue;
        
        // Update the setting
        await config.update('explorer.excludeGitIgnore', newValue, vscode.ConfigurationTarget.Global);
        
        // Show notification
        vscode.window.showInformationMessage(`Git Ignore Files: ${newValue ? 'Excluded' : 'Included'}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
