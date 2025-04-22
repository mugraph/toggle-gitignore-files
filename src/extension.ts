import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Toggle Git Ignore extension is now active');

    let disposable = vscode.commands.registerCommand('toggle-gitignore-files.toggleGitIgnore', async () => {
        const config = vscode.workspace.getConfiguration();
        const currentValue = config.get('explorer.excludeGitIgnore');
        
        const newValue = !currentValue;
        
        await config.update('explorer.excludeGitIgnore', newValue, vscode.ConfigurationTarget.Global);
        
        vscode.window.showInformationMessage(`Git Ignore Files: ${newValue ? 'Excluded' : 'Included'}`);
    });

    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('toggleGitIgnore.showInContextMenu')) {
            console.log('Context menu visibility setting changed');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
